import './office.css'
const data = [
   
    {  destination:"Cabbage", contact: "10%" },
    {  destination:"Brinjal", contact: "17%" },
    {  destination:"Ladys finger", contact: "20%" },
    {  destination:"Potato", contact: "30%" },
    {  destination: "Onion", contact: "48%" },
    {  destination:"Tomato", contact: "60%" },
    
]

function Sugges() {
    return (
        <div>
            
            <table className="officetable">
                <tr>
                <th className="head1">Vegetables planted </th>
                <th className="head2"> in your area</th>
                </tr>
                <tr>
                    <th  className="head">Vegetable Name</th>
                    <th  className="head">Planted percentage</th>
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

export default Sugges;