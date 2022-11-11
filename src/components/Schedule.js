import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Schedule = () => {
    return(
        <section className="schedule" id="schedule">
            <div className="timeline">
                <VerticalTimeline lineColor="#ffff">
                    <VerticalTimelineElement className="vertical-timeline-element" iconStyle={{background: "#fff", color: "#fff"}} date='2000-2019'>
                        
                        
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Schedule;