<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class ContactDTO
{
    #[Assert\NotBlank]
    private string $name;

    #[Assert\NotBlank]
    private string $email;

    #[Assert\NotBlank]
    private string $message;

    private array $captcha;

    #[Assert\NotBlank]
    private string $details;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;
        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;
        return $this;
    }

    public function getDetails(): string
    {
        return $this->details;
    }

    public function setDetails(string $details): static
    {
        $this->details = $details;
        return $this;
    }

    public function getCaptcha(): array
    {
        return $this->captcha;
    }

    public function setCaptcha(array $captcha): static
    {
        $this->captcha = $captcha;
        return $this;
    }
}