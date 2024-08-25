//显示地址 截取，最终返回0x222...99ik
export const ShortenAddress = (address: string, chars = 4): string => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};