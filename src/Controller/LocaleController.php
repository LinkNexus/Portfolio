<?php

namespace App\Controller;

use App\DTO\ContactDTO;
use App\Form\ContactFormType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Attribute\Route;

#[Route(
    path: '/{_locale}',
    name: 'locale_',
    requirements: [
        '_locale' => 'en|fr|de',
    ]
)]
final class LocaleController extends AbstractController
{

    public function __construct()
    {}

    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('app/index.html.twig', [
                'form' => null,
                'path' => ''
            ]);
    }

    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        return $this->render('app/index.html.twig', [
            'form' => null,
            'path' => 'about'
        ]);
    }

    #[Route('/services', name: 'services')]
    public function services(): Response
    {
        return $this->render('app/index.html.twig', [
            'form' => null,
            'path' => 'services'
        ]);
    }

    #[Route('/projects', name: 'projects')]
    public function projects(): Response
    {
        return $this->render('app/index.html.twig', [
            'form' => null,
            'path' => 'projects'
        ]);
    }

    #[Route('/contact', name: 'contact')]
    public function contact(Request $request, MailerInterface $mailer): Response
    {
        $data = new ContactDTO();
        $form = $this->createForm(ContactFormType::class, $data);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $email = (new TemplatedEmail())
                ->from($this->getParameter('sender_email'))
                ->to($this->getParameter('user_email'))
                ->subject('Mail from my Portfolio')
                ->htmlTemplate('emails/contact.html.twig')
                ->context([
                    'data' => $data
                ]);

            try {
                $mailer->send($email);
                $this->addFlash('notice', 'Your message has been sent.');
            } catch (TransportExceptionInterface $e) {
                $this->addFlash('error', $e->getMessage());
            } finally {
                return $this->redirectToRoute('locale_contact');
            }
        }

        return $this->render('app/index.html.twig', [
            'form' => $form,
            'path' => 'contact'
        ]);
    }

    #[Route('/resume', name: 'resume')]
    public function resume(Request $request) : BinaryFileResponse
    {
        $locale = $request->getPreferredLanguage(['en', 'fr', 'de']);
        $file = __DIR__ . '/../../assets/images/resumes/resume-'. ($locale ?: 'en') .'.pdf';
        return $this->file($file, 'resume-en.pdf', ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
