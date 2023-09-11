import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Skills from '../components/Skills';
import Connect from '../components/Connect';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Modal from '../components/Modal';

function About (props) {

    const navigate = useNavigate();

    const [ featuredProjects ] = useState(
        props.data.projects.filter((p) => {
            return p.featured === true;
        })
    );
    const [ modalOpen, setModalOpen ] = useState(false);


    return (
        <div>
            <Header bio={props.data.bio} />
            <h3 className='font-semibold text-2xl mt-12' id='skills'>Technical Skills</h3>
            <Skills skills={props.data.skills} />
            <h3 className='font-semibold text-2xl pt-6 my-3'>Connect with Amber</h3>
            <Connect />
            <h3 className='font-semibold text-2xl pt-6 mb-3 mt-10'>Featured Projects</h3>
            <div className='flex justify-center items-start w-screen'>
                <Project projects={featuredProjects} />
            </div>
            <button className='btn-primary justify-center items-center mb-4' onClick={() => navigate('/projects')}>View More Projects</button>
            <div className='flex flex-col items-center mt-3' id='contact'>
                <Contact setModalOpen={setModalOpen} />
            </div>
            {modalOpen ? <Modal setModalOpen={setModalOpen} /> : ''}
        </div>
    );
}


export default About;