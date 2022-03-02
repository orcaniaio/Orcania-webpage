import "./table.scss";

const Table = () => {
  return (
    <div
      className="container"
      style={{ display: "grid", placeItems: "center" }}
    >
      <div className="boxa has-background-box is-shadowless">
        <table className="table has-background-traansparent has-text-dark is-size-5">
          <thead>
            <tr>
              <th></th>
              <th>
                <h1 className="subtitle is-4"> Ethereum</h1>
              </th>
              <th>
                <h1 className="subtitle is-4"> Polygon</h1>
              </th>
              <th>
                <h1 className="subtitle is-4"> BSC</h1>
              </th>
              <th>
                <h1 className="subtitle is-4"> Harmony </h1>
              </th>
              <th>
                <h1 className="subtitle is-4 has-text-contrast">
                  {" "}
                  Orcania Bridge
                </h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="has-text-right">TPS</th>
              <td>15</td>
              <td>80</td>
              <td>180</td>
              <td>1000</td>
              <td className="has-text-contrast has-background-semi">60,000</td>
            </tr>
            <tr>
              <th className="has-text-right">Validators</th>
              <td>>7500</td>
              <td>100</td>
              <td>21</td>
              <td>1000</td>
              <td className="has-text-contrast has-background-semi">450</td>
            </tr>
            <tr>
              <th className="has-text-right">Tx Fees</th>
              <td>$20</td>
              <td>$0.00128</td>
              <td>$0.05</td>
              <td>$0.000·0084</td>
              <td className="has-text-contrast has-background-semi">
                $0.000·0084
              </td>
            </tr>
            <tr>
              <th className="has-text-right">Annual Issuance</th>
              <td>1%</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>3%</td>
              <td className="has-text-contrast has-background-semi">0-5%</td>
            </tr>
            <tr>
              <th className="has-text-right">Sharding</th>
              <td>1 shard</td>
              <td>1 shard</td>
              <td>1 shard</td>
              <td>4 shards</td>
              <td className="has-text-contrast has-background-semi">
                15 blockchains{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
