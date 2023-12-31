export type TableActionsType = {
    buttonTitle: string;
    onClickAction: (id: number) => void;
};

export interface ICustomTableProps {
    tableData: any[];
    tableConfig: any[];
    loading?: boolean;
    tableActions: TableActionsType[];
}