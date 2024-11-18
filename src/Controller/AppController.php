<?php

namespace App\Controller;

use App\DTO\ContactDTO;
use App\Form\ContactFormType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

final class AppController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('app/index.html.twig', [
            'form' => null
        ]);
    }

    #[Route('/about', name: 'app_about')]
    public function about(): Response
    {
        return $this->render('app/index.html.twig', [
            'form' => null
        ]);
    }

    #[Route('/services', name: 'app_services')]
    public function services(): Response
    {
        return $this->render('app/index.html.twig', [
            'form' => null
        ]);
    }

    #[Route('/projects', name: 'app_projects')]
    public function projects(): Response
    {
        return $this->render('app/index.html.twig', [
            'form' => null
        ]);
    }

    #[Route('/contact', name: 'app_contact')]
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
                return $this->redirectToRoute('app_contact');
            }
        }

        return $this->render('app/index.html.twig', [
            'form' => $form
        ]);
    }
}
