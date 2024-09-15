import { BsPatchCheckFill } from 'react-icons/bs';
import './SkillCard.css';

const SkillCard = ({ data, title }) => {

    const cardStyle = title === 'Frontend Development'
        ? { "--color-primary": "var(--color-success)" }
        : { "--color-primary": "blueviolet" };

    return (
        <div className="skill__card" style={cardStyle}>
            <h3>{title}</h3>
            <div className="skill__content">
                {
                    data.map((list, index) => (
                        <article className='skill__details' key={index}>

                            <BsPatchCheckFill className='skill__icon' />
                            <div>
                                <h4 className="skill__name">{list.skill}</h4>
                                <small className='text__muted skill__level'>{list.level}</small>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}
export default SkillCard
