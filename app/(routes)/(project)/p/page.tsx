import { redirect } from 'next/navigation'

export default function ProjectBuilder() {
  const hasProject = false

  if (!hasProject) {
    // create a new project
    // get the ID of new project
    // redirect to the new project

    // temporary
    redirect(`/${crypto.randomUUID()}`)
  } else {
    // redirect to the latest existing project
  }
}
