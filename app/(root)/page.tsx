import Headerbox from "../components/Headerbox"
import TotalBalanceBox from "../components/TotalBalanceBox"

const Home = () => {
  const loggedIn ={
    firstName:"Aniket Bhogawar"
    
  }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
          type="greeting"
          title="Welcome ,"
          user={loggedIn.firstName}
          subtext="Banking at your fingertips"
          />
          <TotalBalanceBox 
           accounts={["HDFC" , "SBI" , "IPPB"]}
           totalBalance={15000}
           totalAccounts={3}



          />
        </header>
      </div>
      

    </section>
  )
}

export default Home