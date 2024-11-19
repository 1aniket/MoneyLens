
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DougnutChart from './DougnutChart'

const TotalBalanceBox = ({totalAccounts , totalBalance , accounts}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>

    <div className='total-balance-chart'>
        <DougnutChart accounts={accounts} />
    </div>
    <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
            {totalAccounts} Bank Accounts
        </h2>
        <div className='flex flex-col gap-2'>
            <p className='total-balance-label'>
                Total Current Balance
            </p>
            <h1 className='total-balance-ammount flex-center gap-2 text-2xl'>
                
                <AnimatedCounter
                ammount={totalBalance}
                />
                
            </h1>
        </div>
    </div>

    </section>
  )
}

export default TotalBalanceBox