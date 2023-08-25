import { render } from "@testing-library/react"
import FeedbackMessage from "."

describe("<FeedbackMessage>", function(){
    it("should render feedback message", function(){
        const { getByText } = render(<FeedbackMessage text="Erro de feedback"/>)
        const feedbackElement = getByText('span')
        expect(feedbackElement).toBeInTheDocument()
    })

})