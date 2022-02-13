import { ErrorMessageDescr } from "./ErrorMessage.styled"

export const ErrorMessage = ({ value }) => {
   return <ErrorMessageDescr>We dont have any {value} for this movie.</ErrorMessageDescr>    
}