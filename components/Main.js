import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = ({showFilter, children}) => {
  return (
    <>
      <Header showFilter={showFilter}/>
      <main className="">
        <div className="container px-4 relative">
          <div className="mt-4">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Main;