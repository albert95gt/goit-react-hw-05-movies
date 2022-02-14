import { ErrorMessageDescr } from "./ErrorMessage.styled"
import PropTypes from "prop-types";

export const ErrorMessage = ({ value }) => {
   return <ErrorMessageDescr>We dont have any {value} for this movie.</ErrorMessageDescr>    
}

ErrorMessage.propTypes = {
   value: PropTypes.string.isRequired,
}