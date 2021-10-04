import { web3 } from "../wallet/providers/web3";
import { AbiItem } from 'web3-utils';
import { abi } from "../utils/abi/Token1.json";

export default function useFactory(tokenAddress: string) {
    const Token = new web3.eth.Contract(abi as AbiItem[], tokenAddress);
    return Token;
}