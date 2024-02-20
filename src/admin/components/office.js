import './office.css'
const data = [
    {  destination:"Assistant Director of Agriculture, Thalavadi", contact: "04295-245100" },
    {  destination: "Assistant Director of Agriculture, Sathyamangalam", contact: "04295-223930" },
    {  destination:"Assistant Director of Agriculture, Anthiyur", contact: "04256-263353" },
    {  destination:"Assistant Director of Agriculture T.N Palayam", contact: "04285-262262" },
    {  destination:"Assistant Director of Agriculture, Nambiyur", contact: "04285-268138" },
    {  destination:"Assistant Director of Agriculture, Gobichettipalayam", contact: "04285-221777" },
    {  destination:"Assistant Director of Agriculture, Chennimalai", contact: "04294-252399" },
    {  destination:"Assistant Director of Agriculture, Perundurai", contact: "04294-220066" },
    {  destination:"Assistant Director of Agriculture, Bhavanisagar", contact: "04295-241222" },
    {  destination:"Assistant Director of Agriculture, Ammapettai", contact: "0456-229919" },
    {  destination:"Assistant Director of Agriculture, Kodumudi", contact: "04204-222070" },
    {  destination:"Assistant Director of Agriculture, Bhavani", contact: "0456-231808" },
    {  destination:"Assistant Director of Agriculture,Modakurichi", contact: "0424-2920045" },
    {  destination:"Assistant Director of Agriculture, Erode", contact: "0424-2269101" },
    {  destination:"Deputy Director of Agriculture, Erode", contact: "0424-2330230" },
    {  destination:"Deputy Director Horticulture, Erode", contact: "0424-2339497" },
    {  destination:"Joint Director of Agriculture, Erode", contact: "0424-2339101" },
]

function Office() {
    return (
        <div>
            <table className="officetable">
                <tr>
                    <th  className="head">Agri Offices</th>
                    <th  className="head">Landline No</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr className="rows" key={key}>
                            <td className="rows">{val.destination}</td>
                            <td>{val.contact}</td>
                            
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Office;