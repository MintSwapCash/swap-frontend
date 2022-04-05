import { web3 } from "../../wallet/providers/web3";
import styled from "styled-components";
import PoolContainer from "./PoolContainer";
import PoolIcon from "./PoolIcon";
import { useHistory } from "react-router";
export default function Pool() {

    const history = useHistory();
    return (
        <div className="">
            <h5>Liquidity pools</h5>
            <div className="mt-3 d-flex flex-wrap">
                <PoolIcon 
                    token1="WMINT" 
                    token2="XTR"
                    address="0x427c8f51a2598082a5B61213e293a8474C08150E"
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-XTR")}
                    
                    />
                <PoolIcon 
                    token1="WMINT" 
                    token2="PRSS"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-PRSS")}
                    
                    />
                <PoolIcon 
                    token1="WMINT" 
                    token2="ANUK"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-ANUK")}
                    
                    />
                <PoolIcon 
                    token1="WMINT" 
                    token2="CONT"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-CONT")}
                    
                    />

            </div>
        </div>
    )
}
