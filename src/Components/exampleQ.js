import "./exampleQ.css"
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap"

export default function ExampleQuestionComponent() {
    return (
        <div className="formBlock">
            <h2 className="question"> Gia Huy có tip cho NLQ không </h2>
            <span  className="answerGroup">
                <ToggleButtonGroup className="toggleBtn" type="radio" name="options">
                        <ToggleButton variant="danger" className="answerOption" id="tbg-radio-1" value={1}>
                            có,sao lại không được
                        </ToggleButton>
                        <ToggleButton variant="danger"  className="answerOption" id="tbg-radio-2" value={2}>
                            TP 00001659173
                        </ToggleButton>
                        <ToggleButton variant="danger" className="answerOption" id="tbg-radio-3" value={3}>
                            Momo 0395645763
                        </ToggleButton>
                        <ToggleButton variant="danger"  className="answerOption" id="tbg-radio-4" value={4}>
                            Agribank 1600205395466 
                        </ToggleButton>  
                </ToggleButtonGroup>              
            </span>
        </div>
    )
}