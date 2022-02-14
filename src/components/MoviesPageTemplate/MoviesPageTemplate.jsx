import { Link, useLocation } from "react-router-dom";
import { SEARCH_IMG_URL } from "constance";
import DefaultPoster from "../../images/PosterNotAvailable.jpg";
import { Section, FilmList, FilmItem, FilmItemImg, DefaultImg, FilmItemTitle } from "./MoviesPageTemplate.styled";
import { Wrapper } from "components/Wrapper/Wrapper.styled";
import PropTypes from 'prop-types';

export const MoviesPageTemplate = ({ films })=> {
   const location = useLocation();
       return (
         <Section>
            <Wrapper>
               <FilmList>
                  {
                     films.map(({ id, title, poster_path, release_date }) => (
                        <FilmItem key={id}>
                           <Link to={`${id}`} state={{from: location}}>
                              {poster_path ? <FilmItemImg src={`${SEARCH_IMG_URL}/${poster_path}`} alt={title} /> : <DefaultImg src={DefaultPoster} alt="poster not available"/>}
                              <FilmItemTitle>{title} <span>({release_date.slice(0, 4)})</span></FilmItemTitle>
                           </Link>
                        </FilmItem>
                     ))
                  }
               </FilmList>
            </Wrapper>
         </Section> 
        
    )
}

MoviesPageTemplate.propTypes = {
   films: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
   })).isRequired,
}