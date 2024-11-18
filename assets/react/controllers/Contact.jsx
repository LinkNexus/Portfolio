export default function ({ csrfToken, form }) {
    return (
        <div className='px-5 py-8 md:px-10 md:py-12 rounded-xl contact-form-container'>
            <div className='contact-form-header'>
                <h2 className='text-4xl md:text-6xl mb-2'>Let's work together!</h2>
                <p className='text-center mb-3 md:text-lg'>
                    I'm always ready to start new projects and learn new technologies. You can contact me
                    with this form, so that we can work together.
                </p>
            </div>
            <div className='w-full mt-5' dangerouslySetInnerHTML={{ __html: form }}></div>
        </div>
    )
}