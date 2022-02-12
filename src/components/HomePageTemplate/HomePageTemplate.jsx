import { Link, useLocation } from "react-router-dom";
import { SEARCH_IMG_URL } from "constance";
import { HomePageTitle, Section, FilmList, FilmItem, FilmItemImg, FilmItemTitle } from "./HomePageTemplate.styled";
import { Wrapper } from "components/Wrapper";
export const HomePageTemplate = ({ films }) => {
    const location = useLocation();
    return (
        <Section>
            <Wrapper>
                <HomePageTitle>Trending today:</HomePageTitle>
                <FilmList>
                {films.map(({ id, title, poster_path })=> (
                    <FilmItem key={id}>
                        <Link to={`movies/${id}`} state={{from: location}}>
                            <FilmItemImg src={`${SEARCH_IMG_URL}/${poster_path}`} alt={title} />
                            <FilmItemTitle>{title}</FilmItemTitle>
                        </Link>
                    </FilmItem>
                ))}
                </FilmList>
            </Wrapper>
        </Section>
        
    )
}