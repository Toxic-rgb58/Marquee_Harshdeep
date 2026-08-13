public class AnimalDogExample {
    static class Animal {
        void makeSound() {
            System.out.println("Animal makes sound");
        }
    }

    static class Dog extends Animal {
        @Override
        void makeSound() {
            System.out.println("Dog makes sound");
        }
    }

    public static void main(String[] args) {
        Animal animal1 = new Animal();
        Animal animal2 = new Animal();
        Dog dog1 = new Dog();
        Dog dog2 = new Dog();

        animal1.makeSound();
        animal2.makeSound();
        dog1.makeSound();
        dog2.makeSound();
    }
}
