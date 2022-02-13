import { Link, useLocation } from "react-router-dom";
import { SEARCH_IMG_URL } from "constance";
import DefaultPoster from "../../images/PosterNotAvailable.jpg";
import { Section, FilmList, FilmItem, FilmItemImg, DefaultImg, FilmItemTitle } from "./MoviesPageTemplate.styled";
import { Wrapper } from "components/Wrapper/Wrapper.styled";

export const MoviesPageTemplate = ({ films })=> {
   const location = useLocation();
       return (
         <Section>
            <Wrapper>
               <FilmList>
                  {
                     films.map(({ id, title, poster_path }) => (
                        <FilmItem key={id}>
                           <Link to={`${id}`} state={{from: location}}>
                              {poster_path ? <FilmItemImg src={`${SEARCH_IMG_URL}/${poster_path}`} alt={title} /> : <DefaultImg src={DefaultPoster} alt="poster not available"/>}
                              <FilmItemTitle>{title}</FilmItemTitle>
                           </Link>
                        </FilmItem>
                     ))
                  }
               </FilmList>
            </Wrapper>
         </Section> 
        
    )
}