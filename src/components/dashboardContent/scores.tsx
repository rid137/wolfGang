import PaginationBtn from '../shared/paginationBtn'
import Heading from '../shared/heading'

const Scores = () => {
  return (
    <section>
        <div className="bg-greyBg text-black text-center py-6 mt-5 rounded-md"> 
                <Heading label="Scores Over Time" />
                <p>Scores are impacted by many factors and not just removed or new account. If you have questions on your score
                    please contact your Account Manager
                </p>
                <div className="flex justify-between items-center  font-bold mb-3  mx-10 mt-8">
                    <p>Account name</p>
                    <p>Account number</p>
                    <p>Bureau</p>
                    <p>Balance</p>
                </div>

                {Array(10)
                        .fill(10)
                        .map((_,) => (
                    <div className="bg-white mx-4 rounded-lg" >
                        <div className="flex justify-between items-center w-full  mb-2 py-3 px-6">
                            <p>Dianne Russell</p>
                            <p>******* 7869</p>
                            <p>Experian</p>
                            <p>***</p>
                        </div>

                    </div>
                    ))
                }

                <div className="flex justify-end mx-4">
                    <p>Latest actions (Showing 01 to 09 of 259)</p>
                </div>

                <PaginationBtn />
            </div>
    </section>
  )
}

export default Scores
