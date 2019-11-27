export interface FiltersProps {
  limit?: number,
  type?: string[],
  from?: number, 
  to?: number,
  timeStep?: string
}

export interface TimePeriodFilterProps {
  activeTimeStep?: string,
  actions?: any,
  urlParams?: any
}

export interface ShowWatchedOnly {
  showWatchedOnly: boolean;
}

export interface WatchListFilter {
  watchListFilter: boolean;
}

export interface State {
  common: WatchListFilter;
}
