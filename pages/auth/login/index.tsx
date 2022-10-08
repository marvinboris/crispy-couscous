import Link from "next/link";
import { FormEvent, ReactElement } from "react";

import Layout, { Head } from "../../../components/auth/navigation/Layout";

const params = {
    link: '/auth/login',
    title: "Se connecter | TV+",
    description: "Se connecter à TV+"
}

const LoginPage = () => {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
        <Head {...params} />
        <div className="">
            <label htmlFor="username" className="mb-3 block text-sm font-medium">Nom d'utilisateur</label>

            <input id="username" type="text" name="username" autoComplete="username" required className="block w-full appearance-none rounded-md border border-secondary-200 bg-secondary-50 px-3 py-2 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm" />
        </div>

        <div className="">
            <label htmlFor="password" className="mb-3 block text-sm font-medium">Mot de passe</label>

            <input id="password" type="password" name="password" autoComplete="current-password" required className="block w-full appearance-none rounded-md border border-secondary-200 bg-secondary-50 px-3 py-2 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm" />
        </div>

        <div>
            <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary-600 text-white hover:text-slate-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary-600 w-full" type="submit">
                <span>Connexion <span aria-hidden="true">→</span></span>
            </button>
        </div>
    </form>
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout title="Veuillez vous connecter à votre compte" text={<>
        Vous n'avez pas de compte? <Link href="/auth/register"><a className="font-medium text-primary-600 hover:underline">S'inscrire</a></Link>.
    </>}>{page}</Layout>
}

export default LoginPage