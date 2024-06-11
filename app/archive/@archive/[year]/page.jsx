import NewsList from '@/components/NewsList'
import { DUMMY_NEWS } from '@/lib/constants/dummy-news'
import { getNewsForYear } from '@/lib/utils/news'
import React from 'react'

const FilteredNewsPage = ({ params }) => {
    const { year } = params
    const newsForThisYear = getNewsForYear(year)
    return <NewsList news={newsForThisYear} />
}

export default FilteredNewsPage
