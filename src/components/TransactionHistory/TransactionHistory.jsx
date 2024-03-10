import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
  return (
      <div>
          <table className={css.table}>
              <thead className={css.table_title}>
                  <tr >
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Currency</th>
                  </tr>
              </thead>

              <tbody>
                  {items.map(item => (
                      <tr className={css.table_line} key={item.id}>
                      <td>{item.type}</td>
                      <td>{item.amount}</td>
                      <td>{item.currency}</td>
                  </tr>))}
              </tbody>
          </table>
 
    </div>
  )
}

export default TransactionHistory