import './table.scss';

const Table = () => {
    return(
        <div className="container" style={{display: 'grid', placeItems: 'center'}}>
            <div className="boxa has-background-box is-shadowless">
                <table className="table has-background-traansparent has-text-dark is-size-5">
                    <thead>
                        <tr>
                            <th></th>                            
                            <th><h1 className="subtitle is-4"> Other Bridges </h1></th>                            
                            <th><h1 className="subtitle is-4 has-text-contrast"> Crypto Family Bridge </h1></th>
                        </tr>
                    </thead>
                    <tbody>                                            
                        <tr>
                            <th className="has-text-right">Token Support</th>
                            <td>Limited support to selected tokens</td>
                            <td className="has-text-contrast has-background-semi">Support to all tokens and assets, the CF bridge allows anyone to add any token they want to the bridge</td>
                        </tr>
                        <tr>
                            <th className="has-text-right">NFT Support</th>
                            <td>none</td>
                            <td className="has-text-contrast has-background-semi">First bridge to openly support all NFT standards</td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Processing time</th>                            
                            <td>15 min - 48 hours</td>
                            <td className="has-text-contrast has-background-semi">10 seconds</td>
                        </tr>                        
                        <tr>
                            <th className="has-text-right">Fees</th>                            
                            <td>percentage of the assets being transferred</td>                            
                            <td className="has-text-contrast has-background-semi">Transaction fee of less than a cent</td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Decentralization</th>
                            <td>Centralized or semi-decentralized</td>                            
                            <td className="has-text-contrast has-background-semi"> Fully decentralized </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;