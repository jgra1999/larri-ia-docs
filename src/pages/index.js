import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'
import Translate from '@docusaurus/Translate'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				<h1 className='hero__title'>{siteConfig.title}</h1>
				<p className='hero__subtitle'>
					<Translate>Use the full potential of Larri</Translate>
				</p>
				<div className={styles.buttons}>
					<Link className='button button--secondary button--lg' to='/docs/intro'>
						Larri AI Docs 📓
					</Link>
				</div>
			</div>
		</header>
	)
}

export default function Home() {
	return (
		<Layout
			title={`Documentación`}
			description='En esta guía te mostramos algunos prompts que le puedes hacer a Larri para mejorar tu experiencia educativa. Descubre cómo Larri puede responder a tus preguntas, generar contenido, ayudarte con tus tareas y mucho más.'
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}
