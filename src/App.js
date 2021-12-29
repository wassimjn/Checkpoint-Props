import './App.css';
import Profile from './profile/profile';

function App() {
 const handleName=(name)=>{alert(name)}
  var prof = {
     fullName :"Jendoubi Wassim",
     bio : "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
     profession: "Technicien en informatique"
  }
  return (
   <div className='App'>
     <Profile fullName={prof.fullName} bio={prof.bio} profession={prof.profession} handleName={handleName} >
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu255oIbMx2hP6wkSIH3jtPuVFYOmVvhDiyg&usqp=CAU" alt='image'></img>
      </div>
     </Profile>
   </div>
  );
}

export default App;
