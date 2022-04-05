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
                    address="0xB580f1dbA1c17882Fca8f6DDadA8428c9cB177fC"
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-XTR")}
                    
                    />
                <PoolIcon 
                    token1="WMINT" 
                    token2="PRSS"
                    address="0xFe56deBf29Cab1a641543107e17c8d6225F9f626" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-PRSS")}
                    
                    />
                <PoolIcon 
                    token1="WMINT" 
                    token2="ANUK"
                    address="0xfcC19E279D0240cFdaBdEEB6885f6829FCCfa501" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-ANUK")}
                    
                    />
                <PoolIcon 
                    token1="WMINT" 
                    token2="CONT"
                    address="0x8D71f14aF3c689f60d554E51e1bf3015281B0B29" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/WMINT-CONT")}
                    
                    />

            </div>
        </div>
    )
}
