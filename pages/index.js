import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import style from '../styles/Home.module.css';
import Services from "../components/Services";
import { client } from "../lib/client";
import Menu from "../components/Menu";
export default function Home({pizzas}) {
  
  return (
    <Layout>
      <div className={style.container}>
        
        {/* body */}
        <main>
               <Hero />
               <Services/>
               <Menu pizzas={pizzas}/>
        </main>
      </div>
      </Layout>
  );
}

export const getServerSideProps = async() => {
const query = '*[_type == "pizza"]';
const pizzas = await client.fetch(query);
return{
  props : {
    pizzas
  }
}
}