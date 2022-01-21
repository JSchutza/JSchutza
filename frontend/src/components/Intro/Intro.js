import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { thunk_getPersonalInfo } from '../../store/thunks/personal.js';
import { thunk_getProjects } from "../../store/thunks/projects.js";
import { thunk_getSkills } from "../../store/thunks/skills.js";
import { useSidebar } from '../../context/SideBarContext.js';


import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import ReactModal from 'react-modal';

import { defaultProjects, defaultSkills, defaultAbout, modalStyle } from './data.js';

import styles from './intro.module.css';


const Intro = () => {
	const history = useHistory();
	const aboutInfo = useSelector(store => store.personalInfoReducer.user);
	const projectInfo = useSelector(store => store.projectsReducer.projects);
	let skillInfo = useSelector(store => store.skillsReducer.skills);
	const dispatch = useDispatch();
	const { pageType, setPageType } = useSidebar();



	useEffect(() => {
		dispatch(thunk_getPersonalInfo());
		dispatch(thunk_getProjects());
		dispatch(thunk_getSkills());
	},[dispatch]);



	const handleClick = (event, type) => {
		event.preventDefault();
		setPageType(type);
	}




	const About = () => {
		const [ openModal, setOpenModal ] = useState(false);

		const closeModal = () => {
			setOpenModal(false);
		};

		const showDetail = event => {
			event.preventDefault();
			setOpenModal(true);
		}

		return (
			<div className={styles.about_wrap} >

				<ReactModal
					isOpen={openModal}
					onRequestClose={closeModal}
					appElement={document.getElementById('root')}
					style={modalStyle}
				>

					<div className={styles.about_text} >
						{!aboutInfo ? <p> {defaultAbout.about_text} </p> : <p> {aboutInfo?.about_text} </p> }
					</div>

				</ReactModal>


				{!aboutInfo ?
				<>
					<div onClick={showDetail} className={styles.detail_wrap} >
						<h1>{defaultAbout.firstname} {defaultAbout.lastname}</h1>
						<h3>{defaultAbout.jobtitle}</h3>

							<div className={styles.profile_img} >
								<img src={defaultAbout.avatar} />
							</div>
					</div>

					<ul className="actions">
						<li>
							<Link
								to="/"
								className="button scrolly"
								onClick={event => handleClick(event, 'projects')}
								>Projects</Link>
						</li>
				</ul>
				</>
				:
				<>
					<div onClick={showDetail} className={styles.detail_wrap} >
						<h1>{aboutInfo?.firstname} {aboutInfo?.lastname}</h1>
						<h3>{aboutInfo?.jobtitle}</h3>

						<div className={styles.profile_img} >
							<img src={aboutInfo?.avatar ? aboutInfo?.avatar : defaultAbout.avatar} />
						</div>
					</div>

					<ul className="actions">
						<li>
							<Link
								to="/"
								className="button scrolly"
								onClick={event => handleClick(event, 'projects')}
								>Projects</Link>
						</li>
					</ul>
				</>
				}
			</div>
		)
	};




	const Projects = ({ eachProj }) => {
		if(!eachProj) eachProj = defaultProjects;
		const [ idx, setIdx ] = useState(0);
		const [ allProjects, _ ] = useState(Object.values(eachProj));
		const [ current, setCurrent ] = useState(allProjects[0]);


		const transition = event => {
			event.preventDefault();
			if(!current) {
				setIdx(0);
				setCurrent(allProjects[0]);
			} else {
				if(!allProjects[idx + 1]) {
					setIdx(0);
					setCurrent(allProjects[0]);
					return;
				}
				setIdx(prev => prev + 1);
				setCurrent(allProjects[idx + 1]);
			}

		};





		return (
			<div className={styles.projects_wrap}>
				<h1> Projects </h1>

				<div className='eachProj_wrap'>
				<CardColumns>
				<Card>
				<Card.Img variant="top" src={current?.project_img} />
					<Card.Body>
						<Card.Title> {current?.project_name} </Card.Title>
						<Card.Text> {current?.description} </Card.Text>
					</Card.Body>
					<Card.Footer>
						<a href={current?.live_link}>
							<small className="text-muted">Live</small>
						</a>
							<br />
						<a href={current?.github_link}>
							<small className="text-muted">GitHub</small>
						</a>

							<Container>
								<Button onClick={event => transition(event)} > Next </Button>
								<Button onClick={event => handleClick(event, 'skills')} > Skills </Button>
							</Container>
						</Card.Footer>
					</Card>
				</CardColumns>
				</div>
			</div>
		)
	}




	const Skills = () => {
		if(!skillInfo) skillInfo = defaultSkills;
		return (
		<div className='skill_wrap' >
				<h2>Skills</h2>
				{Object.values(skillInfo).map(each => (
					<div className="features">
						<section>
							<span className="icon solid major fa-code"></span>
							<h3>{each.title}</h3>
						</section>
					</div>
				))}

				<Button onClick={event => handleClick(event, 'about')} > About </Button>
		</div>
		)
	}



	if(pageType === 'about') {
		return (
			<div className='wrapper'>
				<section id="intro" class="wrapper style1 fullscreen fade-up">
					{pageType === 'about' ? <About /> : null}
				</section>
			</div>
		)
	}



	if(pageType === 'skills') {
		return ( <> {pageType === 'skills' ? <Skills /> : null} </> )
	}




	return ( <> {pageType === 'projects' ? <Projects eachProj={projectInfo} /> : null} </> )
}

export default Intro;
