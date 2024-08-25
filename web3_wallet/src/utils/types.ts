export interface FormDataType {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
    name?: string;
}

export interface TransactionContextValue {
    CurrentAccount?: string;
    // value?: string;
    handleChange?: (e: any, name: string) => void;
    isLoading?: boolean;
    sendTransaction?: () => Promise<void>;
    transactionCount?: number;
    transactions?: TransactionType[];
    connectWallet?: () => Promise<void>;
    formData: FormDataType;
}


// 定义 ProviderPropsType 的类型

export interface ProviderPropsType {
    children: React.ReactNode;
}


// 卡片类型
export interface CardServicesTypeList {
    color: string;
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface TransactionType {
    addressFrom: string;
    addressTo: string;
    timestamp: string;
    message: string;
    id?: number;
    amount: string;
    url?: string;
    keyword?: string;
}


export interface FetchParamsType {
    keyword: string;
}