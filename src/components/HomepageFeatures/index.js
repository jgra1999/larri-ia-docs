import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Translate from '@docusaurus/Translate'

const FeatureList = [
	{
		title: <Translate>Easy to use</Translate>,
		icon: '✨',
		description: (
			<Translate>
				Artificial intelligence is a powerful and versatile tool that can help us in
				many tasks and situations.
			</Translate>
		)
	},
	{
		title: <Translate>Focus on what matters</Translate>,
		icon: '📚',
		description: (
			<Translate>
				The key is how we ask him things: we must be specific, precise and relevant,
				and avoid ambiguities or contradictions.
			</Translate>
		)
	},
	{
		title: 'Powered by JGRA',
		icon: '⚡',
		description: (
			<Translate>
				This guide has been developed by JGRA, to help and guide people who want to
				use artificial intelligence for educational purposes
			</Translate>
		)
	}
]

function Feature({ Svg, title, description, icon }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<span className='icon' style={{ fontSize: '80px' }}>
					{icon}
				</span>
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
