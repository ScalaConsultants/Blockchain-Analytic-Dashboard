import React, { useState } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid/Grid";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import TableFooter from '@material-ui/core/TableFooter';

import TransactionListPagination from './components/TransactionListPagination';
import TransactionListFilter from './components/TransactionListFilter';
import { stableSort, getSorting } from "../../helpers/helpers";
import * as BlokchainActions from "../../store/actions/tezos/blokchain";

interface HeaderColsInterface {
    id: string,
    numeric: boolean,
    disablePadding: boolean,
    label: string
}

const headerCols: Array<HeaderColsInterface> = [
    { id: "timestamp", numeric: false, disablePadding: true, label: "Timestamp" },
    { id: "source", numeric: false, disablePadding: false, label: "Source" },
    { id: "destination", numeric: false, disablePadding: false, label: "Destination" }
];

const filtersName: Array<HeaderColsInterface> = [
    { id: "source", numeric: false, disablePadding: false, label: "Source" },
    { id: "destination", numeric: false, disablePadding: false, label: "Destination" },
    { id: "amountMin", numeric: false, disablePadding: false, label: "Amount min" },
    { id: "amountMax", numeric: false, disablePadding: false, label: "Amount max" }
];

type Order = "asc" | "desc";
type OrderBy = string;

const mapState = (state: any) => ({
    blokchain: state.tezos.blocks
});

let initState: any[] = [];
let filtersOptions: {[key: string]: string} = {};

const TransactionList = (): React.ReactElement => {
    const { blokchain } = useMappedState(mapState);

    if (initState.length === 0) {
        initState = [ ...blokchain ];
    }

    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<OrderBy>("name");

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);

    const tablePaginationProps = {
        rowsPerPageOptions: [15, 25, 50, 100, 250],
        colSpan: 3,
        count: blokchain.length,
        rowsPerPage: rowsPerPage,
        page: page,
        SelectProps: {
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
        },
        onChangePage: handleChangePage,
        onChangeRowsPerPage: handleChangeRowsPerPage,
        ActionsComponent: TransactionListPagination
    }

    let filteredTable:any = null;

    const dispatch = useDispatch();


    function handleChangePage(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        newPage: number,
    ) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const handleRequestSort = (event: any, property: any) => {
        if (orderBy === property && order === "desc") {
            setOrder("asc");
        } else if (orderBy === property && order === "asc") {
            setOrder("desc");
        }
        setOrderBy(property);
    };

    const createSortHandler = (property: any) => (event: any) => {
        handleRequestSort(event, property);
    };

    const timestampToDate = (timestamp: number) => {
        const newDate = new Date(timestamp);
        const formattedDate =
            ("0" + newDate.getDate()).slice(-2) +
            "-" +
            ("0" + (newDate.getMonth() + 1)).slice(-2) +
            "-" +
            newDate.getFullYear();
        const dateWithHour =
            formattedDate
                .split("-")
                .reverse()
                .join("-") +
            " " +
            newDate.getHours() +
            ":" +
            newDate.getMinutes() +
            ":" +
            newDate.getSeconds();

        return dateWithHour.toString();
    };

    const transactionListHeaderGenerate = (headerCols: Array<HeaderColsInterface>) =>
        (headerCols.map((row: HeaderColsInterface) => (
            <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
            >
                <Tooltip
                    title="Sort"
                    placement={row.numeric ? "bottom-end" : "bottom-start"}
                    enterDelay={300}
                >
                    <TableSortLabel
                        active={orderBy === row.id}
                        direction={order}
                        onClick={createSortHandler(row.id)}
                    >
                        {row.label}
                    </TableSortLabel>
                </Tooltip>
            </TableCell>
        )))


    const transactionListRowsGenerate = (blokchain: any) =>
        (stableSort(
            blokchain.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
            getSorting(order, orderBy)
        ).map((row: any, index: number) => (
            <TableRow hover key={index}>
                <TableCell component="th" scope="row">
                    {timestampToDate(row.timestamp)}
                </TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.destination}</TableCell>
            </TableRow>
        )))

    const transactionListFilterGenerate = (headerCols: Array<HeaderColsInterface>) =>
        filtersName.map((row: HeaderColsInterface) => (
            <TableCell>
                <TransactionListFilter name={row.label} onInputChange={filterHandler} id={row.id}/>
            </TableCell>
        ))

    const filteredValue = (filtersOptions: {[key: string]: string}) => {
        let filteredBlokchain = [...initState];

        for (let key in filtersOptions) {

            if (key === 'amountMin') {
                filteredBlokchain = filteredBlokchain
                    .filter((block: any) =>  filtersOptions[key].length ? block.amount > parseInt(filtersOptions[key]) : true);
            }

            if (key === 'amountMax') {
                filteredBlokchain = filteredBlokchain
                    .filter((block: any) => filtersOptions[key].length ? block.amount < parseInt(filtersOptions[key]) : true);
            }

            if (key === 'destination') {
                filteredBlokchain = filteredBlokchain
                    .filter((block: any) => filtersOptions[key].length ? block.destination.includes(filtersOptions[key]) : true);
            }

            if (key === 'source') {
                filteredBlokchain = filteredBlokchain
                    .filter((block: any) => filtersOptions[key].length ? block.source.includes(filtersOptions[key]) : true);
            }
        }

        return filteredBlokchain;
    }

    const filterHandler = (query: string, inputName: string) => {
        filtersOptions[inputName] = query;
        filteredTable = filteredValue(filtersOptions);
       return updateFilteredTransactions(filteredTable);
    }

    const updateFilteredTransactions = (filteredTable:any): void => {
        dispatch({
            type: BlokchainActions.BLOKCHAIN_FILTER_TRANSACTIONS,
            blokchain: filteredTable
        });
      };

    const filteredUpdateMessage = () => {
        return <p>Find <strong>{blokchain.length}</strong> results</p>
    }

    return (
        <Grid container spacing={9} className="Container">
            <Grid item xs={12} lg={12}>
                {transactionListFilterGenerate(headerCols)}
                {filteredUpdateMessage()}
                <Table>
                    <TableHead>
                        <TableRow>
                            {transactionListHeaderGenerate(headerCols)}
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactionListRowsGenerate(blokchain)}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TransactionListPagination
                                {...tablePaginationProps}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Grid>
        </Grid>
    );
};

export default TransactionList;