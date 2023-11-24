import React from 'react'
import PageHeaderContain from '../../components/pageHeaderContainer'
import { BsInfoCircleFill} from "react-icons/bs";
import "./styles.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { resumeData } from '../../utils/particles';
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
function Resumes() {
  return (
    <section className='resumes' id="resumes">
      <PageHeaderContain 
        headerText="Parcours" 
        icon={<BsInfoCircleFill size={40}/>} 
      />
      <div className='timeline'>
         <div className='timeline__experience'>
           <h3 className='timeline__experience__header-text'>Expérience</h3>
           <VerticalTimeline
            layout='1-column'
            lineColor='var(--yellow-theme-main-color)'
           >
             {
              resumeData.experience.map((item,i) => (
                <VerticalTimelineElement
                 key={i}
                 className='timeline__experience__vertical-timeline-element'
                 contentStyle={{
                  background:'none',
                  color:'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                 }}
                 date={item.year}
                 icon={<MdWork />}
                 iconStyle={{
                  background: '#181818',
                  color: 'var( --yellow-theme-main-color)'
                 }}
                >
                 <div className='vertical-timeline-element-title-wrapper'>
                    <h3 className='vertical-timeline-element-title'>
                      {item.title}
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                       {item.subTitle}
                    </h4>
                    
                 </div>
                 <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                </VerticalTimelineElement>
              ))
             }  
           </VerticalTimeline>
         </div>
         <div className='timeline__education'>
            <h3 className='timeline__education__header-text'>Education</h3>
            <VerticalTimeline
            layout='1-column'
            lineColor='var(--yellow-theme-main-color)'
           >
             {
              resumeData?.education?.map((item,i) => (
                <VerticalTimelineElement
                 key={i}
                 className='timeline__experience__vertical-timeline-element'
                 contentStyle={{
                  background:'none',
                  color:'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                 }}
                 icon={<MdOutlineSchool />}
                 iconStyle={{
                  background: '#181818',
                  color: 'var( --yellow-theme-main-color)'
                 }}
                 date= {item.year}
                >
                 <div className='vertical-timeline-element-title-wrapper'>
                    <h3 className='vertical-timeline-element-title'>
                      {item.title}
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                       {item.subTitle}
                    </h4>
                 </div>
                 <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                </VerticalTimelineElement>
              ))
             }  
           </VerticalTimeline>
         </div>
      </div>
    </section>
  )
}

export default Resumes