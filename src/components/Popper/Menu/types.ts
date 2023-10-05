export interface IMenuItem {
  title?: string;
  code?: string;
  icon?: React.ReactElement;
  to?: string;
  data?: IMenuItem[];
  children?: IMenuItem;
}
