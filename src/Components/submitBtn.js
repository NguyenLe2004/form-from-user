import { Button } from "react-bootstrap";
import "./submitBtn.css"

export default function SubmitBtn() {

    const checkAnswer = () => {  // alert if exist 1 form no answer
        const toggleButtonGroups = document.getElementsByClassName("toggleBtn");
      
        let hasUncheckedGroup = false;
      
        for (let i = 0; i < toggleButtonGroups.length; i++) {
          const group = toggleButtonGroups[i];
          const selectedValue = group.querySelector('input[name="options"]:checked');
      
          if (!selectedValue) {
            hasUncheckedGroup = true;
            break;
          }
        }
      
        if (hasUncheckedGroup) {
          alert("Please answer all questions");
        }
      } 
    return(
      <div className="submitBtn">
        <Button variant="danger" type="submit"  onClick={checkAnswer} >
            Submit
        </Button>
      </div>
    );
}