
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
const Pagenation = ({ page, handleNext, handlePrevious }) => {
  const triggerNext = () => { console.log("going next"); handleNext() };
  const triggerPrev = () => { console.log("going prev"); handlePrevious() };
  return (
    <div className="flex flex-row justify-center gap-3">
      <button onClick={triggerPrev}><FontAwesomeIcon icon={faArrowLeft} /></button>
      <span>{page}</span>
      <button onClick={triggerNext}><FontAwesomeIcon icon={faArrowRight} /></button>

    </div>
  )
}
export default Pagenation