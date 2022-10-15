import Link from "next/link";
import { FormEvent, ReactElement } from "react";

import Layout, { Head } from "../../../components/auth/navigation/Layout";

const params = {
    link: '/auth/register',
    title: "S'inscrire | TV+",
    description: "S'inscrire à TV+"
}

const RegisterPage = () => {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
        <Head {...params} />
        <div className="">
            <label htmlFor="first_name" className="mb-3 block text-sm font-medium">Prénom(s)</label>

            <input id="first_name" type="text" name="first_name" autoComplete="given-name" required className="block w-full appearance-none rounded-md border border-secondary-200 bg-secondary-50 px-3 py-2 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm" />
        </div>

        <div className="">
            <label htmlFor="last_name" className="mb-3 block text-sm font-medium">Nom(s)</label>

            <input id="last_name" type="text" name="last_name" autoComplete="family-name" required className="block w-full appearance-none rounded-md border border-secondary-200 bg-secondary-50 px-3 py-2 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm" />
        </div>

        <div className="col-span-full">
            <label htmlFor="email" className="mb-3 block text-sm font-medium">Adresse mail</label>

            <input id="email" type="email" name="email" autoComplete="email" required className="block w-full appearance-none rounded-md border border-secondary-200 bg-secondary-50 px-3 py-2 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm" />
        </div>

        <div className="col-span-full">
            <label htmlFor="password" className="mb-3 block text-sm font-medium">Mot de passe</label>

            <input id="password" type="password" name="password" autoComplete="new-password" required className="block w-full appearance-none rounded-md border border-secondary-200 bg-secondary-50 px-3 py-2 text-secondary-900 placeholder-secondary-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm" />
        </div>

        <div className="col-span-full">
            <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary text-white hover:text-slate-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary w-full" type="submit">
                <span>Inscription <span aria-hidden="true">→</span></span>
            </button>
        </div>
    </form>
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout title="Commencer maintenant" text={<>
        Vous avez déjà un compte? <Link href="/auth/login"><a className="font-medium text-primary hover:underline">Connectez-vous</a></Link> à votre compte.
    </>}>{page}</Layout>
}

export default RegisterPage