import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";


import { thunk_getPersonalInfo } from '../../store/thunks/personal.jsx';
import { thunk_getProjects } from "../../store/thunks/projects.jsx";
import { thunk_getSkills } from "../../store/thunks/skills.jsx";
import { useSidebar } from '../../context/SideBarContext.jsx';


import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import ReactModal from 'react-modal';


import { BsLinkedin, BsGithub } from "react-icons/bs";




import { defaultProjects, defaultSkills, defaultAbout, modalStyle } from './data.jsx';


import styles from './intro.module.css';



const Intro = () => {
	const history = useHistory();
	const aboutInfo = useSelector(store => store.personalInfoReducer.user);
	const projectInfo = useSelector(store => store.projectsReducer.projects);
	let skillInfo = useSelector(store => store.skillsReducer.skills);
	const dispatch = useDispatch();
	const { pageType, setPageType } = useSidebar();
	let overRideStyle = `.btn-primary { color: #fff; background-color: #292246; border-color: #007bff; }`
	let cardStyle = `
	.card-columns {
    column-count: 3;
    -webkit-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    grid-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
    width: 30vw;
	}

	.card-columns .card {
		display: inline-block;
		width: 275px;
	}

	.card-img, .card-img-top {
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
    object-fit: contain;
    width: 15vw;
	}
	`

	useEffect(() => {
		dispatch(thunk_getPersonalInfo());
		dispatch(thunk_getProjects());
		dispatch(thunk_getSkills());
	},[dispatch]);



	const handleClick = type => {
		setPageType(type);
	}




	const About = () => {
		const [ openModal, setOpenModal ] = useState(false);
		const [ show, setShow ] = useState(false);

		const closeModal = () => {
			setOpenModal(false);
		};

		const showDetail = event => {
			event.preventDefault();
			setOpenModal(true);
		}

		return (
			<div className={styles.about_wrap} >
				<style type="text/css"> {overRideStyle} </style>

				<ReactModal
					isOpen={openModal}
					onRequestClose={closeModal}
					appElement={document.getElementById('root')}
					style={modalStyle}
				>

					<div className={styles.about_text} >
						{!aboutInfo ? <p> {defaultAbout.about_text} </p> : <p> {aboutInfo?.about_text} </p> }
					</div>


					<div>
						<a href={defaultAbout.github_link} target='_blank' >
							<BsGithub />
								<br /> GitHub
						</a>
					</div>

					<div>
						 <a href={defaultAbout.linkedin_link} target='_blank' >
								<BsLinkedin />
									<br /> LinkedIn
						 </a>
					</div>

				</ReactModal>


				{!aboutInfo ?
				<>
					<div className={styles.social_links} >
						<div>
							<a href={defaultAbout.github_link} target='_blank' >
								<BsGithub />
							</a>
						</div>

						<div>
							<a href={defaultAbout.linkedin_link} target='_blank' >
								<BsLinkedin />
							</a>
						</div>
					</div>

					<div
						onClick={showDetail}
						onMouseEnter={() => setShow(true)}
						onMouseLeave={() => setShow(false)}
						className={styles.detail_wrap}
					>
						<h1>{defaultAbout.firstname} {defaultAbout.lastname}</h1>
						{show ? <h3> Learn More </h3> : <h3>{defaultAbout.jobtitle}</h3> }

							<div className={styles.profile_img} >
								<img src={defaultAbout.avatar} />
							</div>
					</div>

						<Button onClick={() => handleClick('projects')} >Projects</Button>
				</>
				:
				<>
					<div className={styles.social_links} >
						<div>
							<a href={defaultAbout.github_link} target='_blank' >
								<BsGithub />
							</a>
						</div>

						<div>
							<a href={defaultAbout.linkedin_link} target='_blank' >
								<BsLinkedin />
							</a>
						</div>
					</div>


					<div
						onClick={showDetail}
						onMouseEnter={() => setShow(true)}
						onMouseLeave={() => setShow(false)}
						className={styles.detail_wrap}
					>
						<h1>{aboutInfo?.firstname} {aboutInfo?.lastname}</h1>
						{show ? <h3> Learn More </h3> : <h3>{aboutInfo?.jobtitle}</h3> }

							<div className={styles.profile_img} >
								{!aboutInfo?.avatar ? <img src={defaultAbout.avatar} /> : <img src={aboutInfo?.avatar} /> }
							</div>
					</div>

						<Button onClick={() => handleClick('projects')} >Projects</Button>
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
		const [ view, setView ] = useState(true);
		// setup the grid selectors
		let selectorQueue = ['topleft', 'topright', 'midleft', 'midright', 'botleft', 'botright'];


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



		// changes renders for gallery view to single view and vice versa
		const changeView = currentView => {
			setView(currentView)
		};



		const initSelector = () => {
			if (!selectorQueue.length) selectorQueue = ['topleft', 'topright', 'midleft', 'midright', 'botleft', 'botright'];
			return selectorQueue.shift();
		};


	// shows all of the projects
	if(view) {
		return (
			<div className='intro_projects_wrap'>
				<style type="text/css"> {overRideStyle + cardStyle} </style>

				<h1> All Projects </h1>

				<div className={styles.project_button_wrap} >
					<div>
						<Button to='/' onClick={() => changeView(!view)} > Single </Button>
					</div>

					<div>
						<Button to='/' onClick={() => changeView(!view)} > {'>>>'} </Button>
					</div>
				</div>


				<div className='each_project_wrap' >
					{allProjects.map(each => (
							<div className={initSelector()} >
								<CardColumns>
									<Card>
										<Card.Img variant="top" src={each?.project_img} />
											<Card.Body>
												<Card.Title> {each?.project_name} </Card.Title>
												<Card.Text> {each?.description} </Card.Text>
											</Card.Body>

											<Card.Footer>
												<a href={each?.live_link}>
													<small className="text-muted">Live</small>
												</a>
													<br />
												<a href={each?.github_link}>
													<small className="text-muted">GitHub</small>
											</a>

										</Card.Footer>
									</Card>
								</CardColumns>
							</div>
					))}
				</div>

					<div className={styles.project_button_wrap} >
						<div>
							<Button onClick={() => handleClick('skills')} > Skills </Button>
						</div>
					</div>

			</div>
		)
	}


	// shows only each individual project card
		return (
			<div className='intro_projects_wrap'>
				<style type="text/css"> {overRideStyle} </style>

				<h1> Each Project </h1>

			<div className={styles.project_button_wrap} >
				<div>
					<Button to='/' onClick={() => changeView(!view)} > {'<<<'} </Button>
				</div>

				<div>
					<Button to='/' onClick={() => changeView(!view)} > All </Button>
				</div>
			</div>

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

							</Card.Footer>
						</Card>
					</CardColumns>
				</div>


					<div className={styles.project_button_wrap} >
						<div>
							<Button onClick={event => transition(event)} > Next </Button>
						</div>

						<div>
							<Button onClick={() => handleClick('skills')} > Skills </Button>
						</div>
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


				<div className={styles.skill_button_wrap}>
					<style type="text/css"> {overRideStyle} </style>
					<div>
						<Button onClick={() => handleClick('about')} > About </Button>
					</div>
					<div>
						<Button onClick={() => history.push('/resume')} > Resume </Button>
					</div>
				</div>
		</div>
		)
	}



	if(pageType === 'about') {
		return (
			<div className='wrapper'>
				<section id="intro" className="wrapper style1 fullscreen fade-up">
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
