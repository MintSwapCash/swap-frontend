import { useWeb3React } from "@web3-react/core";
import { TiSocialGithubCircular } from "react-icons/ti";
import { Button } from "../../components/Button";
import useToken from "../../hooks/useToken";
import { metamaskTransaction } from "../../hooks/useTransaction";
import useWMINT from "../../hooks/useWMINT";
import { anukisAddress, prssAddress, xatterAddress, routerAddress, continentalAddress, token1Address, token2Address, wmintAddress } from "../../utils/addresses";
import { fromWei, toWei } from "../../utils/convert";

declare let window: any;

export default function DevTools() {

    const { Token: Token1 } = useToken(token1Address);
    const { Token: Token2 } = useToken(token2Address);
    const { Token: PRSS } = useToken(prssAddress);
    const { Token: XTR } = useToken(xatterAddress);
    const { Token: CONT } = useToken(continentalAddress);
    const { Token: ANUK } = useToken(anukisAddress);
    const WMINT = useWMINT(wmintAddress);
    const { account } = useWeb3React();

    async function getBalanceOfToken1(address: string | null | undefined) {
        return alert(await Token1.methods.balanceOf(address).call());
    }
    async function getBalanceOfToken2(address: string | null | undefined) {
        return alert(await Token2.methods.balanceOf(address).call());
    }
    async function approveToken1ForRouter() {
        const encodedABI = Token1.methods.approve(routerAddress, toWei("100")).encodeABI();
        const txParams = {
            from: account,
            to: token1Address,
            data: encodedABI,
            value: "0"
        }
        window.ethereum.request({
            method: "eth_sendTransaction",
            params: [txParams]
        })
    }
    async function mintToken1() {
        const encodedABI = Token1.methods.faucet(toWei("10")).encodeABI();
        const txhash = await metamaskTransaction(account, token1Address, encodedABI, "");
        return alert(`minted 10 TK1, transaction hash is ${txhash}`);
    }
    async function mintToken2() {
        const encodedABI = Token2.methods.faucet(toWei("10")).encodeABI();
        const txhash = await metamaskTransaction(account, token2Address, encodedABI, "");
        return alert(`minted 10 TK2, transaction hash is ${txhash}`);
    }
    async function mintPRSS() {
        const encodedABI = PRSS.methods.faucet(toWei("10")).encodeABI();
        const txhash = await metamaskTransaction(account, prssAddress, encodedABI, "");
        return alert(`minted 10 PRSS, transaction hash is ${txhash}`);
    }
    async function mintXTR() {
        const encodedABI = XTR.methods.faucet(toWei("10")).encodeABI();
        const txhash = await metamaskTransaction(account, xatterAddress, encodedABI, "");
        return alert(`minted 10 XTR, transaction hash is ${txhash}`);
    }
    async function mintCONT() {
        const encodedABI = CONT.methods.faucet(toWei("10")).encodeABI();
        const txhash = await metamaskTransaction(account, continentalAddress, encodedABI, "");
        return alert(`minted 10 CONT, transaction hash is ${txhash}`);
    }
    async function mintANUK() {
        const encodedABI = ANUK.methods.faucet(toWei("10")).encodeABI();
        const txhash = await metamaskTransaction(account, anukisAddress, encodedABI, "");
        return alert(`minted 10 ANUK, transaction hash is ${txhash}`);
    }
    
    async function wrapMINT() {
        const encodedABI = WMINT.methods.deposit().encodeABI();
        const txhash = await metamaskTransaction(account, wmintAddress, encodedABI, "10");
        alert(txhash);
    }

    async function wmintBalance() {
        alert(fromWei(await WMINT.methods.balanceOf(account).call()));
    } 

    return (
        <div>
            <h3 className="mb-5">Dev tools</h3>
            <h5>Tokens</h5>
            <hr />
            <div className="mb-5">
                {/* <Button onClick={() => getBalanceOfToken1(account)}>balanceOf TK1</Button> */}
                {/* <Button onClick={() => getBalanceOfToken2(account)}>balanceOf TK2</Button> */}
                {/* <Button onClick={() => approveToken1ForRouter()}>allowance TK1 {"(owner => router)"}</Button> */}
                {/* <Button>allowance TK2 {"(owner => router)"}</Button> */}
                {/* <Button onClick={() => mintToken1()}>mint TK1</Button> */}
                {/* <Button onClick={() => mintToken2()}>mint TK2</Button> */}
                {/* <Button onClick={() => mintPRSS()}>mint PRSS</Button> */}
                {/* <Button onClick={() => mintXTR()}>mint XTR</Button> */}
                {/* <Button onClick={() => mintCONT()}>mint CONT</Button> */}
                {/* <Button onClick={() => mintANUK()}>mint ANUK</Button> */}

                <Button onClick={() => wrapMINT()}>Wrap 10 MintMe</Button>
                <Button onClick={() => wmintBalance()}>Balance of Wrapped MintMe</Button>

                {/* <Button>approve TK1 (router)</Button> */}
                {/* <Button>approve TK2 (router)</Button> */}
            </div>
            <h5>Factory</h5>
            <hr />
            <div className="mb-5">
                {/* <Button>init hash code</Button> */}
            </div>

        </div>
    )
}
