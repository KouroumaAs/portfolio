import React from 'react'
import PageHeaderContain from '../../components/pageHeaderContainer';
import { BsInfoCircleFill} from "react-icons/bs";
import "./styles.scss";
import { SkillsData } from '../../utils/particles';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
function Skills() {

  return (
    <section className='skills' id="skills">
      <PageHeaderContain 
        headerText="Compétences" 
        icon={<BsInfoCircleFill size={40}/>} 
      />
       <div className='skills__content-wrapper'>
         {
          SkillsData.map((item,i) => {
            return(
              <div className='skills__content-wrapper__inner-content' key={i}>
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
                <div className='skills__content-wrapper__inner-content__progressbar-container'>
                  {item.data.map((skillItem,j) => (
                    <AnimateKeyframes
                       play
                       duration={1}
                       keyframes={["opacity: 1" ,"opacity:0"]}
                       iterationCount= "1"
                       key={skillItem.skillName+"_"+j}
                    >
                     <div className='progressbar-wrapper'>
                         <p>{skillItem.skillName}</p>
                         <Line 
                           percent={skillItem.percentage}
                           strokeWidth="2"
                           strokeColor="var(--yellow-theme-main-color)"
                           trailWidth= {'2'}
                           strokeLinecap="square" 
                         />
                     </div>
                    </AnimateKeyframes> 
                  ))}
                </div>
              </Animate>
             </div>
            )
             
          })
         }
       </div>
    </section>
  )
}

export default Skills