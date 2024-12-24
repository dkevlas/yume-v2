import SubtitleHomeComp from "./SubtitleHomeComp"

export default function ContactComp(){
    return (
        <div className="py-16 px-6">
            <SubtitleHomeComp subtitle="Contacto" />
            <div className="max-w-lg mx-auto bg-transparent outline outline-2 outline-yume-primary dark:outline-yume-secondary p-8 rounded-lg shadow-md">
                <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-yume-primary dark:text-yume-secondary">Nombre</label>
                    <input type="text" id="name" name="name" className="mt-1 block bg-transparent w-full p-3 border border-yume-primary dark:border-yume-secondary rounded-lg" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-yume-primary dark:text-yume-secondary">Correo Electrónico</label>
                    <input type="email" id="email" name="email" className="mt-1 bg-transparent block w-full p-3 border rounded-lg border-yume-primary dark:border-yume-secondary" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-yume-primary dark:text-yume-secondary">Mensaje</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 outline-none bg-transparent resize-none block w-full p-3 border border-yume-primary dark:border-yume-secondary rounded-lg" required></textarea>
                </div>
                <button type="submit" className="w-full bg-yume-primary dark:bg-yume-secondary text-white py-3 px-6 rounded-lg text-lg transition duration-300 hover:bg-orange-600">
                    Enviar Mensaje
                </button>
                </form>
            </div>
        </div>
    )
}