import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Game from "../components/Game"
import LeafletMap from "../components/LeafletMap"
import MapboxMap from "../components/MapBoxMap"
import roundsData from '../data/rounds.json'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="text-amber-700 text-3xl">MapGuesser</h1>
      <h2 className="text-lg">How well do you know Europe?</h2>
      <Game /> 
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>MapGusser</title>
