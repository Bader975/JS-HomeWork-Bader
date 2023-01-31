import Nav from './components/Nav'
import Footer from './components/Footer'
// import Card from './components/Card'
import Movies from './components/Movies'
import TV_Shows from './components/TV-Shows'
import './App.css'

function App() {


  return (
    <div className="App">
      <Nav/>
<h1>Top Movies <i className="fa-solid fa-fire"></i></h1>
<div className="card-container">
     <Movies title={"The Shawshank Redemption"} image={"https://m.media-amazon.com/images/I/519NBNHX5BL._AC_SY580_.jpg"} showdate={"(1994)"} rate={9.2} available={false}/>
     <Movies title={"The Godfather "} image={"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"} showdate={"(1972)"} rate={8.7} available={true}/>
     <Movies title={"The Dark Knight "} image={"https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg"} showdate={"(2008)"}rate={9.1} available={false}/>
     <Movies title={" Fight Club "} image={"https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg"} showdate={"(1999)"} rate={8.7} available={false}/>
     <Movies title={"The Matrix"} image={"https://static.wikia.nocookie.net/matrix/images/5/56/The_Matrix_digital_release_cover.jpg"} showdate={"(1999)"}rate={8.7} available={true}/>
      </div>
      
      <h1>Top TV Shows <i className="fa-solid fa-fire"></i></h1>
      <div className="card-container">
      <TV_Shows title={"Breaking Bad"} image={"https://www.bergamonews.it/photogallery_new/images/2014/01/breaking-bad-tutti-gli-elementi-del-capolavoro-465250.large.jpg"} showdate={"(2008)"} rate={9.8} available={true}/>
     <TV_Shows title={"Your Honor "} image={"https://m.media-amazon.com/images/M/MV5BMjQ3YjU2MzctNTFmOC00NDZiLWEwMWUtMmJlMjUxMWZhZWE1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"} showdate={"(2010)"} rate={7.5} available={true}/>
     <TV_Shows title={"	1883  "} image={"https://m.media-amazon.com/images/M/MV5BNDZkZDdkMjYtMGI3Yi00MmVkLTkzZjQtMGI0NGViNzIzNjhjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg"} showdate={"(2021)"}rate={8.8} available={true}/>
     <TV_Shows title={" The Office "} image={"https://flxt.tmsimg.com/assets/p7893510_b_v13_ab.jpg"} showdate={"(2005)"} rate={9.1} available={false}/>
     <TV_Shows title={"Vikings"} image={"https://m.media-amazon.com/images/M/MV5BMmZlYTQ3NjQtZmIxNC00MzA4LTg1NDgtMmEzODk0MzA4NjQxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"} showdate={"(1999)"}rate={8.7} available={true}/>
            </div>
      <Footer/>
    </div>
  )
}

export default App;
