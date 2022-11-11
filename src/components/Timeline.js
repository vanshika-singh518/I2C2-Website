import React from 'react';
import TimelineData from '../components/scheduleData'
import TimelineItem from './TimelineItem'

const Timeline = () => TimelineData.length > 0 && (
    <section className="schedule" id="schedule">
        <h2>Schedule</h2>
        <div className='timeline-container'>
            {TimelineData.map((data, idx) => (
                <TimelineItem data = {data} key = {idx} />
            ))}
        </div>
    </section>
)

export default Timeline;