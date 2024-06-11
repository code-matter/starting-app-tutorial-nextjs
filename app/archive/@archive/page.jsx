// This is a PARALLEL route page

import { getAvailableNewsYears } from '@/lib/utils/news'
import Link from 'next/link'
import React from 'react'

const links = getAvailableNewsYears()

const Archive = () => {
    return (
        <header id='archive-header'>
            <nav>
                <ul>
                    {links.map(link => (
                        <li key={link}>
                            <Link href={`/archive/${link}`}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Archive
